"use server";
import { prisma } from "./lib/db";

type OfficeType = {
  officeId: string;
  rooms: {
    roomType: string;
    name: string;
    capacity: number;
  }[];
};

export async function postOfficeData({ officeId, rooms }: OfficeType) {
  try {
    await prisma.office.create({
      data: {
        officeId: officeId,
        rooms: {
          create: rooms,
        },
      },
    });
    console.log("データが正常に追加されました。");
  } catch (error) {
    console.error("データ追加中にエラーが発生しました:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getOfficeData(officeId: string) {
  try {
    const office = await prisma.office.findUnique({
      where: {
        officeId: officeId,
      },
      include: {
        rooms: {
          include: {
            users: true,
          },
        },
      },
    });
    return office;
  } catch (error) {
    console.error("データ取得中にエラーが発生しました:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function addUserToRoom(userId: string, roomId: number) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        roomId: roomId,
      },
    });
    console.log(
      `User with ID ${userId} added to room with ID ${roomId} successfully.`
    );
    return updatedUser;
  } catch (error) {
    console.error("Error adding user to room:", error);
    throw error;
  }
}

export async function removeUserFromRoom(userId: string) {
  try {
    // UserのroomIdをnullに更新して、関連付けを解除する
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        roomId: null,
      },
    });

    console.log(`User with ID ${userId} removed from room successfully.`);
    return updatedUser;
  } catch (error) {
    console.error("Error removing user from room:", error);
    throw error;
  }
}


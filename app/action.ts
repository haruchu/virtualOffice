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

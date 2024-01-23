"use server";
import { prisma } from "./lib/db";

export async function postData() {
  try {
    await prisma.office.create({
      data: {
        officeId: "test_office_new", // 新しいofficeId
        rooms: {
          create: [
            {
              roomId: "test_room_1",
              roomType: "2",
              name: "Room 1",
              capacity: 2,
            },
            {
              roomId: "test_room_2",
              roomType: "4",
              name: "Room 2",
              capacity: 4,
            },
          ],
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

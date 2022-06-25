import { applyStatusFilter } from ".";
import { StatusFilterEnum } from "lib/types";

const list = [
  {
    id: "1",
    serialKey: "NDK-1",
    description: "Burguer King",
    isKioskClosed: false,
    storeOpensAt: "09:00:00",
    storeClosesAt: "22:00:00",
  },
  {
    id: "2",
    serialKey: "NDK-2",
    description: "Mac",
    isKioskClosed: true,
    storeOpensAt: "09:00:00",
    storeClosesAt: "22:00:00",
  },
  {
    id: "3",
    serialKey: "NDK-3",
    description: "KFC",
    isKioskClosed: false,
    storeOpensAt: "09:00:00",
    storeClosesAt: "22:00:00",
  },
  {
    id: "3",
    serialKey: "NDK-4",
    description: "Sushi",
    isKioskClosed: false,
    storeOpensAt: "09:00:00",
    storeClosesAt: "22:00:00",
  },
];

describe("when the filter is different than open and closed", () => {
  it("returns the whole list", () => {
    const result = applyStatusFilter(list, StatusFilterEnum.all);
    expect(result).toEqual(list);
  });
});

describe("when the filter is open", () => {
  it("returns only the opened kiosks", () => {
    const result = applyStatusFilter(list, StatusFilterEnum.open);
    expect(result).toEqual([
      {
        id: "1",
        serialKey: "NDK-1",
        description: "Burguer King",
        isKioskClosed: false,
        storeOpensAt: "09:00:00",
        storeClosesAt: "22:00:00",
      },
      {
        id: "3",
        serialKey: "NDK-3",
        description: "KFC",
        isKioskClosed: false,
        storeOpensAt: "09:00:00",
        storeClosesAt: "22:00:00",
      },
      {
        id: "3",
        serialKey: "NDK-4",
        description: "Sushi",
        isKioskClosed: false,
        storeOpensAt: "09:00:00",
        storeClosesAt: "22:00:00",
      },
    ]);
  });
});

describe("when the filter is closed", () => {
  it("returns only the closed kiosks", () => {
    const result = applyStatusFilter(list, StatusFilterEnum.closed);
    expect(result).toEqual([
      {
        id: "2",
        serialKey: "NDK-2",
        description: "Mac",
        isKioskClosed: true,
        storeOpensAt: "09:00:00",
        storeClosesAt: "22:00:00",
      },
    ]);
  });
});

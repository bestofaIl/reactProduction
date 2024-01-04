import { classNames } from "shared/lib/classNames/classNames";

describe("className", () => {
    test("with only first param", () => {
        expect(classNames("class1")).toBe("class1");
    });
    test("with additional param", () => {
        expect(classNames("class1", {}, ["hidden"])).toBe("class1 hidden");
    });
    test("with mods and additional param", () => {
        expect(classNames("class1", {
            collapsed: true,
            hovered: true,
        }, ["hidden"])).toBe("class1 collapsed hovered hidden");
    });
    test("with false mod and additional param", () => {
        expect(classNames("class1", {
            collapsed: false,
            hovered: true,
        }, ["hidden"])).toBe("class1 hovered hidden");
    });
});

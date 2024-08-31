import React from "react";
import { color } from "./color";

interface FontPropsType {
    text?: string;
    kind?: keyof typeof fonts;
    color?: keyof typeof color;
}

export const Font = ({ text, kind = "", color: textColor = "black" }: FontPropsType) => {
    const textColorStyle = textColor ? { color: color[textColor] } : {};

    return <p style={{...fonts[kind], ...textColorStyle}}>{text}</p>
};

const fonts: {[key: string]: React.CSSProperties} = {
    "": {},
    semi52: {
        fontSize: "52px",
        fontWeight: "600",
        lineHeight: 54,
    },
    semi48: {
        fontSize: "48px",
        fontWeight: "600",
        lineHeight: 52
    },
    bold40: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: 48
    },
    medium38: {
        fontSize: "38px",
        fontWeight: "500",
        lineHeight: 48
    },
    semi36: {
        fontSize: "36px",
        fontWeight: "600",
        lineHeight: 48
    },
    semi32: {
        fontSize: "32px",
        fontWeight: "600",
        lineHeight: 44
    },
    bold24: {
        fontSize: "24px",
        fontWeight: "700",
        lineHeight: 36
    },
    semi24: {
        fontSize: "24px",
        fontWeight: "600",
        lineHeight: 36
    },
    medium24: {
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: 36
    },
    semi20: {
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: 24
    },
    medium20: {
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: 24
    },
    semi18: {
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: 22
    },
    medium18: {
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: 22
    },
    regular18: {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: 22
    },
    bold16: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: 20
    },
    semi16: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: 20
    },
    medium16: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: 20
    },
    regular16: {
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: 20
    },
    semi14: {
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: 18
    },
    medium14: {
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: 20
    },
    regular14: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: 20
    },
    medium12: {
        fontSize: "12px",
        fontWeight: "500",
        lineHeight: 14
    },
    regular12: {
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: 14
    },
};
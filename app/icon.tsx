import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "#f8fafc",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "Inter, Arial, sans-serif",
          borderRadius: 12,
        }}
      >
        BB
      </div>
    ),
    size,
  );
}

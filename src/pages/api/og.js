import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const DOMAIN = "https://meta-psi-five.vercel.app";
    const hasTitle = searchParams.has("title");
    const hasImageUrl = searchParams.has("imageUrl");
    const title = hasTitle ? searchParams.get("title") : "New collection";

    const imageUrl = hasImageUrl
        ? searchParams.get("imageUrl")
        : `${DOMAIN}/public/Sample-png-image-200kb.png`;

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Arial, sans-serif",
                    color: "white",
                    backgroundColor: "black",
                }}
            >
                <img
                    src={imageUrl}
                    alt="Background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        padding: "20px",
                        borderRadius: "10px",
                        color: "white",
                        fontSize: "50px",
                        fontWeight: "bold",
                        textAlign: "center",
                        whiteSpace: "pre-wrap",
                        zIndex: 1,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    {title}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}

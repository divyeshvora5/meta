// pages/api/og.js

import { ImageResponse } from "@vercel/og";

export const config = {
    runtime: "edge",
};

export default function handler(req) {
    const { searchParams } = new URL(req.url);
    const DOMAIN = "https://meta-psi-five.vercel.app";
    console.log("🚀 ~ handler ~ searchParams:", searchParams);
    const hasTitle = searchParams?.has("title");
    const hasImageUrl = searchParams?.has("amp;imageUrl");
    const title = hasTitle ? searchParams?.get("title") : "New collection";

    const imageUrl = hasImageUrl
    ? searchParams?.get("amp;imageUrl")
    : `${DOMAIN}/public/Sample-png-image-200kb.png`;
    
    console.log("🚀 ~ handler ~ imageUrl:", imageUrl)
    return new ImageResponse(
        (
            <div
                // style={{
                //     display: "flex",
                //     height: "100%",
                //     width: "100%",
                //     position: "relative",
                //     alignItems: "center",
                //     justifyContent: "center",
                //     fontFamily: "Arial, sans-serif",
                // }}
            >
                <img
                    src={imageUrl}
                    alt="Background"
                    // style={{
                    //     position: "absolute",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     width: "100%",
                    //     height: "100%",
                    //     objectFit: "cover",
                    // }}
                />
                <div
                    // style={{
                    //     position: "absolute",
                    //     top: "50%",
                    //     left: "50%",
                    //     transform: "translate(-50%, -50%)",
                    //     padding: "20px",
                    //     borderRadius: "10px",
                    //     color: "black",
                    //     fontSize: "50px",
                    //     fontWeight: "bold",
                    //     textAlign: "center",
                    //     whiteSpace: "pre-wrap",
                    //     zIndex: 1,
                    // }}
                >
                    {title}
                </div>
            </div>
        ),
        // {
        //     width: 300,
        //     height: 158,
        // }
    );
}

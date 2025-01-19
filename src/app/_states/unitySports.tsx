import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export const UnitySports = () => {
  const { unityProvider } = useUnityContext({
    dataUrl: "/unity-spotrs/Build/UnitySport.data",
    frameworkUrl: "/unity-spotrs/Build/UnitySport.framework.js",
    codeUrl: "/unity-spotrs/Build/UnitySport.wasm",
    loaderUrl: "/unity-spotrs/Build/UnitySport.loader.js",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100%", height: "100%vh" }}
    />
  );
};

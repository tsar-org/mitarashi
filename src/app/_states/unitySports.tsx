import { Unity, useUnityContext } from "react-unity-webgl";

export const UnitySports = () => {
  const { unityProvider } = useUnityContext({
    dataUrl: "/unity-sports/Build/UnitySport.data",
    frameworkUrl: "/unity-sports/Build/UnitySport.framework.js",
    codeUrl: "/unity-sports/Build/UnitySport.wasm",
    loaderUrl: "/unity-sports/Build/UnitySport.loader.js",
  });

  return (
    <Unity
      unityProvider={unityProvider}
      style={{ width: "100%", height: "100%vh" }}
    />
  );
};

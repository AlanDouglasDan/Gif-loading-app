import { useEffect, useState } from "react";

type UseGifImageWithPlaceholderLogic = {
  gifUri: string;
};

export const useGifImageWithPlaceholderLogic = ({
  gifUri,
}: UseGifImageWithPlaceholderLogic) => {
  const [isGifLoaded, setIsGifLoaded] = useState<boolean>(false);

  // reset isGifLoaded value whenever gifUri changes because that's when the setInterval on RandomGif would've updated the randomIndexValue therefore displaying a new image
  // and the purpose of resetting this state variable is so that it displays the placeholder image for the newly updated image for starters till the original version is loaded
  useEffect(() => {
    setIsGifLoaded(false);
  }, [gifUri]);

  return { isGifLoaded, setIsGifLoaded };
};

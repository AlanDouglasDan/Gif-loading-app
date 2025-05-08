import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import { jest, describe, it, expect, beforeEach } from "@jest/globals";

import GifImageWithPlaceholder from "./GifImageWithPlaceholder";

describe("GifImageWithPlaceholder", () => {
  // Clear mock history before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const gifUri = "https://example.com/main.gif";
  const previewGifUri = "https://example.com/preview.gif";

  it("should initially render the preview image", () => {
    const { queryByTestId } = render(
      <GifImageWithPlaceholder gifUri={gifUri} previewGifUri={previewGifUri} />
    );

    expect(queryByTestId("original-gif-image")).toBeTruthy();
    expect(queryByTestId("preview-image")).toBeTruthy();
  });

  it("should render the main GIF image after it loads", async () => {
    const { getByTestId, queryByTestId } = render(
      <GifImageWithPlaceholder gifUri={gifUri} previewGifUri={previewGifUri} />
    );

    // Simulate main image load event
    await waitFor(() => {
      getByTestId("original-gif-image").props.onLoad();
    });

    expect(queryByTestId("original-gif-image")).toBeTruthy();
    expect(queryByTestId("preview-image")).toBeNull();
  });

  it("should reset to preview image when gifUri changes", async () => {
    const { rerender, queryByTestId, getByTestId } = render(
      <GifImageWithPlaceholder gifUri={gifUri} previewGifUri={previewGifUri} />
    );

    // Simulate main image load
    await waitFor(() => {
      getByTestId("original-gif-image").props.onLoad();
    });

    expect(queryByTestId("preview-image")).toBeNull();

    // Update gifUri to simulate a change
    rerender(
      <GifImageWithPlaceholder
        gifUri={"https://example.com/new.gif"}
        previewGifUri={previewGifUri}
      />
    );

    expect(queryByTestId("preview-image")).toBeTruthy();
  });
});

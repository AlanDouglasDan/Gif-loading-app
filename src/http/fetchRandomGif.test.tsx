import { jest, describe, it, expect, beforeEach } from "@jest/globals";

import { fetchRandomGif, giphyApiKey, giphyApiBaseUrl } from "./api";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { id: "123", title: "Sample Gif" } }),
  })
) as any;

describe("fetchRandomGif", () => {
  // Clear mock history before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls the Giphy API and returns a gif object", async () => {
    const result = await fetchRandomGif();
    expect(typeof result).toBe("object"); // Ensure the result is an object
    expect(fetch).toHaveBeenCalledWith(
      `${giphyApiBaseUrl}/random?api_key=${giphyApiKey}`
    );
  });

  it("handles fetch errors gracefully", async () => {
    (fetch as any).mockImplementationOnce(() => Promise.reject("API failure"));
    await expect(fetchRandomGif()).rejects.toEqual("API failure");
  });
});

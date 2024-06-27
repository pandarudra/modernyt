const vapi = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Title ${index + 1}`,
  video: `https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4?id=${
    index + 1
  }`, // Sample video URL
  image: `https://picsum.photos/200/300?random=${index + 1}`, // Placeholder image URL
}));
export default vapi;

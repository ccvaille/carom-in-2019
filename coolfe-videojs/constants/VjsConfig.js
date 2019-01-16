export const getOptions = src => ({
    controls: true, // 是否有控制条
    fluid: true, // 是否添加响应式
    playbackRates: [0.75, 1, 1.25, 1.5, 2],
    sources: [
        {
            src,
            type: 'video/mp4'
        }
    ]
})

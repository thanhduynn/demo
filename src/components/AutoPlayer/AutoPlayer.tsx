'use client';
import React, { useRef, useEffect } from 'react';

export const AutoPlayer = ({ url }: any) => {
    // Add parameters to disable controls and autoplay
    const getModifiedUrl = (videoUrl: any) => {
        if (videoUrl.includes('vimeo')) {
            // Vimeo parameters
            return `${videoUrl}?autoplay=1&loop=1&background=1&muted=1`;
        } else if (videoUrl.includes('youtube')) {
            // YouTube parameters
            return `${videoUrl}?autoplay=1&loop=1&controls=0&mute=1&playlist=${getYouTubeID(videoUrl)}`;
        }
        return videoUrl;
    };

    // Helper function to get YouTube video ID
    const getYouTubeID = (url:any) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <iframe
            src={getModifiedUrl(url)}
            className="w-full h-full absolute inset-0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            style={{
                pointerEvents: 'none', // Prevents interaction
                userSelect: 'none',    // Prevents selection
            }}
        />
    );
};

// Usage in your project component:
export default function ProjectCard({ project }: any) {
    return (
        <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
            <AutoPlayer url={project.url} />
        </div>
    );
}
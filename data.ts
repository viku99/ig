import { Content } from './types';

export const contentData: Content = {
  lastUpdated: "July 26, 2024",
  about: {
    bio: "A visual architect and storyteller, I specialize in crafting compelling narratives through the language of motion and visual effects. With a foundation in cinematic principles and a relentless pursuit of technical innovation, I transform abstract concepts into tangible, emotive experiences. My studio is a laboratory where light, texture, and movement converge to build worlds, evoke emotion, and leave a lasting impact.",
    imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop"
  },
  skills: [
    { "name": "After Effects" },
    { "name": "Cinema 4D" },
    { "name": "Houdini" },
    { "name": "Redshift" },
    { "name": "Octane" },
    { "name": "Nuke" },
    { "name": "Figma" },
    { "name": "Unreal Engine" },
    { "name": "Blender" },
    { "name": "ZBrush" }
  ],
  testimonials: [
    {
      "quote": "Vikas is a rare talent who combines world-class technical skill with a profound understanding of narrative pacing. He didn't just animate our assets; he gave our story a heartbeat.",
      "author": "Ava Chen",
      "company": "Director, Nexus Films"
    },
    {
      "quote": "Working with Vikas was a masterclass in collaboration. His creative vision is immense, yet he's incredibly receptive to feedback, making the entire process seamless and the final product extraordinary.",
      "author": "Ben Carter",
      "company": "Brand Manager, Quantum Dynamics"
    },
    {
      "quote": "The level of polish and detail in his VFX work is second to none. Vikas delivered a sequence that became the most talked-about moment of our entire series.",
      "author": "Olivia Reed",
      "company": "Showrunner, Epoch Television"
    }
  ],
  socialLinks: [
    { name: 'LinkedIn', href: "https://www.linkedin.com/in/vikasbala19" },
    { name: 'Behance', href: "https://www.behance.net/vikasbala" },
    { name: 'Github', href: "https://github.com/viku99" },
    { name: 'Instagram', href: "https://www.instagram.com/zorox.x_" },
  ],
  projects: [
    {
      "id": "nova-genesis-drive",
      "title": "NOVA: Genesis Drive",
      "category": "Motion Graphics",
      "thumbnail": "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "thumbnailVideo": "https://assets.mixkit.co/videos/preview/mixkit-futuristic-sports-car-on-a-glowing-road-42409-large.mp4",
      "heroMedia": { "type": "video", "src": "https://assets.mixkit.co/videos/preview/mixkit-black-and-red-sports-car-on-a-dark-road-42410-large.mp4" },
      "client": "AURA Automotive",
      "year": 2024,
      "tools": ["Cinema 4D", "Redshift", "After Effects", "DaVinci Resolve"],
      "description": "Launch film for AURA's first all-electric hypercar. We crafted a visual narrative that blends photorealistic CGI with abstract motion to visualize the flow of energy and thought, focusing on technological innovation and sleek, aerodynamic forms. The piece established the brand's new futuristic identity.",
      "gallery": [
        "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      ]
    },
    {
      "id": "echoes-of-nebula",
      "title": "Echoes of Nebula",
      "category": "Title Sequence",
      "thumbnail": "https://images.unsplash.com/photo-14511875804ef-943490279c0fa?q=80&w=2072&auto=format&fit=crop",
      "thumbnailVideo": "https://assets.mixkit.co/videos/preview/mixkit-it-is-a-nebula-in-space-23351-large.mp4",
      "heroMedia": { "type": "image", "src": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
      "client": "Starlight Pictures",
      "year": 2023,
      "tools": ["Houdini", "Nuke", "Redshift"],
      "description": "Main title sequence for a hard sci-fi series. We developed a journey through breathtaking cosmic phenomena, using procedural nebulae, pyro simulations, and Nuke compositing to create a visual overture that hints at the show's central themes of discovery and cosmic horror.",
      "gallery": [
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1822&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1610989569835-c80378f45a62?q=80&w=1974&auto=format&fit=crop"
      ]
    },
    {
      "id": "project-defiance",
      "title": "Project: Defiance",
      "category": "UI Animation",
      "thumbnail": "https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "thumbnailVideo": "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-man-with-a-vr-helmet-30320-large.mp4",
      "heroMedia": { "type": "video", "src": "https://assets.mixkit.co/videos/preview/mixkit-a-man-in-a-hoodie-walks-down-a-dark-alley-34133-large.mp4" },
      "client": "CYGNUS Interactive",
      "year": 2024,
      "tools": ["Figma", "After Effects", "Unreal Engine"],
      "description": "A full suite of futuristic user interface (FUI) and heads-up display (HUD) animations for a AAA cyberpunk game. Our focus was on diegetic integration, ensuring every element felt grounded in the game world while providing critical player feedback with clarity and style."
    },
    {
      "id": "liquid-chroma",
      "title": "Liquid Chroma",
      "category": "VFX",
      "thumbnail": "https://images.pexels.com/photos/1408199/pexels-photo-1408199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "thumbnailVideo": "https://assets.mixkit.co/videos/preview/mixkit-ink-in-water-3969-large.mp4",
      "heroMedia": { "type": "video", "src": "https://assets.mixkit.co/videos/preview/mixkit-liquid-colors-loop-422-large.mp4" },
      "client": "AURORA (Musical Artist)",
      "year": 2023,
      "tools": ["Houdini", "Maya", "Bifrost", "Nuke"],
      "description": "Surreal VFX for a music video where the artist interacts with morphing, chromatic liquid simulations. This project was a delicate blend of practical footage and complex CG, using custom solvers in Houdini to create otherworldly fluid dynamics that react to the music."
    },
    {
      "id": "the-oracles-lens",
      "title": "The Oracle's Lens",
      "category": "Interactive",
      "thumbnail": "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      "thumbnailVideo": "https://assets.mixkit.co/videos/preview/mixkit-futuristic-wireframe-tunnel-1043-large.mp4",
      "heroMedia": { "type": "image", "src": "https://images.unsplash.com/photo-1635863138235-5a8b7c765ef3?q=80&w=2070&auto=format&fit=crop" },
      "client": "Museum of Digital Art",
      "year": 2022,
      "tools": ["Blender", "Three.js", "WebGL", "GLSL"],
      "description": "An immersive WebGL experience where users explore a procedurally generated world. Interactive VFX and shader-based visuals reveal stories and artifacts, creating a non-linear narrative that is unique to each visitor's journey through the digital installation.",
      "gallery": [
         "https://images.unsplash.com/photo-1634017839464-5c33923cb4ae?q=80&w=1974&auto=format&fit=crop",
         "https://images.unsplash.com/photo-1634456488327-0a256a0f4445?q=80&w=1974&auto=format&fit=crop"
      ]
    },
    {
      "id": "ephemeral-structures",
      "title": "Ephemeral Structures",
      "category": "Experimental",
      "thumbnail": "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop",
      "thumbnailVideo": "https://assets.mixkit.co/videos/preview/mixkit-triangles-of-different-colors-in-a-seamless-loop-4100-large.mp4",
      "heroMedia": { "type": "video", "src": "https://assets.mixkit.co/videos/preview/mixkit-abstract-white-and-blue-waves-loop-4309-large.mp4" },
      "client": "Personal R&D",
      "year": 2024,
      "tools": ["Houdini", "Redshift", "ZBrush", "Fusion"],
      "description": "A personal research and development project exploring the creation of 'impossible architecture' using procedural modeling and physics-based simulations. This series of short visual poems focuses on atmospheric lighting and textural detail to evoke a sense of serene, dreamlike beauty."
    }
  ]
};
(async () => {
    try {
        const vibrant = await import('node-vibrant/node');
        const Vibrant = vibrant.default || vibrant.Vibrant || vibrant;
        const palette = await Vibrant.from('src/app/app_icon.png').getPalette();
        console.log("Vibrant:", palette.Vibrant ? palette.Vibrant.hex : 'none');
        console.log("Muted:", palette.Muted ? palette.Muted.hex : 'none');
        console.log("DarkVibrant:", palette.DarkVibrant ? palette.DarkVibrant.hex : 'none');
        console.log("DarkMuted:", palette.DarkMuted ? palette.DarkMuted.hex : 'none');
        console.log("LightVibrant:", palette.LightVibrant ? palette.LightVibrant.hex : 'none');
        console.log("LightMuted:", palette.LightMuted ? palette.LightMuted.hex : 'none');
    } catch (e) {
        console.error(e);
    }
})();

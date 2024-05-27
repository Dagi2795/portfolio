document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = 0;
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }, 500);
    });
});

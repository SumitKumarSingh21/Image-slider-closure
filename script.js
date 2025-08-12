function createSlider(images) {
  let index = 0;

  const updateImage = () => {
    document.getElementById('slider-image').src = images[index];
    updateDots();
  };

  const updateDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  const next = () => {
    index = (index + 1) % images.length;
    updateImage();
  };

  const prev = () => {
    index = (index - 1 + images.length) % images.length;
    updateImage();
  };

  const goTo = (i) => {
    index = i;
    updateImage();
  };

  return { next, prev, goTo, init: updateImage };
}

// Image list
const sliderImages = [
  'images/astonmartin.jpg',
  'images/bentley.jpg',
  'images/bentleysupersport.jps',
  'images/bugatti.jpg',
  'images/rollsroyce.jpg',
];

const slider = createSlider(sliderImages);

// Add dots dynamically
const dotsContainer = document.getElementById('dots-container');
sliderImages.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => slider.goTo(i));
  dotsContainer.appendChild(dot);
});

document.getElementById('next-btn').addEventListener('click', slider.next);
document.getElementById('prev-btn').addEventListener('click', slider.prev);

slider.init();

// Optional: Auto-play every 3 seconds
setInterval(slider.next, 3000);


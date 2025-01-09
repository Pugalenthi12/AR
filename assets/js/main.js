// Initialize 8thWall WebAR
const xrScene = new XR8.Scene({
    onStart: ({ scene }) => {
      // Load a 3D model
      const loader = new THREE.GLTFLoader();
      loader.load(
        'assets/3d-model/model.glb', // Replace with the relative path to your 3D model
        (gltf) => {
          const model = gltf.scene;
          model.scale.set(0.1, 0.1, 0.1); // Adjust the model's scale
          scene.add(model);
        },
        undefined,
        (error) => {
          console.error('An error occurred while loading the 3D model:', error);
        }
      );
    },
  });
  
  // Attach to the AR scene container
  xrScene.mount({ container: document.getElementById('ar-scene') });
  
  // Button action for "Learn More"
  const infoButton = document.getElementById('info-button');
  infoButton.addEventListener('click', () => {
    window.location.href = "https://your-website-link.com"; // Replace with your website or portfolio link
  });
  
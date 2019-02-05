import viewarApi from 'viewar-api';

import './index.scss';

(async function main() {
  window.api = await viewarApi.init();

  const sheepModel = await viewarApi.modelManager.fetchModelFromRepository(
    '20'
  );

  for (let x = 0; x < 20; ++x) {
    await viewarApi.sceneManager.insertModel(sheepModel, {
      pose: {
        position: {
          x: Math.random() * 4000 - 2000,
          y: 0,
          z: Math.random() * 4000 - 2000,
        },
      },
    });
  }
})();

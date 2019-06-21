import viewarApi from 'viewar-api';
import './remote-console';

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

  console.log('log', {
    'a': 1234,
    'b': '5678',
  });
  console.info('info');
  console.warn('warn');
  console.error('error');
})();

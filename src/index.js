import viewarApi from 'viewar-api';
import './remote-console';

import './index.scss';

(async function main() {
  window.api = await viewarApi.init();

  const testModel = await viewarApi.modelManager.fetchModelFromRepository(
    '53696' // configurationModel 53696
  );

  const instance = await viewarApi.sceneManager.insertModel(testModel, {
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  });

  // default propertyValues for model with modelId 38388
  // {Chrome: "chrome", Cushion: "black", Coating: "01RAL9016weiss", Wood: "01WoodFine0014_L"}
  // Cushion: "white" is valid, Cushion: "red" is invalid

  // setTimeout(() => instance.setPropertyValues({Chrome: "chrome", Cushion: "white", Coating: "01RAL9016weiss", Wood: "01WoodFine0014_L"}, 2000));
  
  // use this if you test with modelId 53696
  setTimeout(() => instance.setPropertyValues({['Verkleidung Links']: "Speckstein"}), 2000);

  console.log('log', {
    'a': 1234,
    'b': '5678',
  });
  console.info('info');
  console.warn('warn');
  console.error('error');
})();


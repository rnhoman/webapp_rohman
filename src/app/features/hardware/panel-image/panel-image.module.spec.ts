import { PanelImageModule } from './panel-image.module';

describe('PanelImageModule', () => {
  let panelImageModule: PanelImageModule;

  beforeEach(() => {
    panelImageModule = new PanelImageModule();
  });

  it('should create an instance', () => {
    expect(panelImageModule).toBeTruthy();
  });
});

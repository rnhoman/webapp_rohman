import { CreateUsersModule } from './create-users.module';

describe('CreateUsersModule', () => {
  let createUsersModule: CreateUsersModule;

  beforeEach(() => {
    createUsersModule = new CreateUsersModule();
  });

  it('should create an instance', () => {
    expect(createUsersModule).toBeTruthy();
  });
});

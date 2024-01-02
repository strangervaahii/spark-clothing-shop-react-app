// using the above import going to render the App and start testing
// Arrange
import App from './App';

// Act -> write the test case
// test spec beginss

// testSuite -- group of related test spec
describe('App', () => {
  // 'it ' is an alias of test
  it('has proper App Component', () => {
    // Act is optional
    // Assert is mandatory for a text spec
    // expect is from jest
    // toBeTruthy is a matcher from '@testing-library/react'
    expect(App).toBeTruthy();
  });
});

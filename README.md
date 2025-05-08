## Overview
This project is a **GIF display app**, built using **React Native** with **Expo** for easy setup and deployment. It leverages **Jest** and **React Native Testing Library** for comprehensive testing to ensure app reliability and maintainability.

## Architecture

The app follows a **Component-Based Architecture** with clear separation between **UI components** and **logic components**, ensuring that the codebase remains modular, maintainable, and testable.

1. **UI Components**: Components strictly handling the presentation are separated to keep the UI layer clean and easily reusable. This enables the app to scale visually without entangling UI and logic, and allows easier refactoring.

2. **Logic Components**: Business logic and API interactions are separated into dedicated logic files. This promotes reusability and makes the app easier to test and maintain by avoiding duplication and keeping the components focused on a single responsibility.

3. **API Calls**: API calls use **fetch** and are encapsulated in service files. This approach centralizes API configurations and allows easy testing by making it straightforward to mock or stub API responses.

### Why This Architecture?

This architecture was chosen for its scalability, maintainability, and ease of testing. Separating logic from UI not only promotes component reusability but also minimizes code duplication and dependencies. Each component has a well-defined responsibility, which simplifies debugging and ensures that changes in one area are less likely to impact others. Additionally, this modular approach improves test coverage and accelerates the development process, making it ideal for scaling features or adapting to new requirements.

Compared to other possible alternatives, such as a monolithic approach where UI and logic are tightly coupled, this architecture provides flexibility and enhances productivity. By separating concerns, any developer working on the app can work on different components independently without conflicts, and testing is more straightforward due to isolated responsibilities. This separation also eases integration with third-party libraries and enhances code readability, which is crucial as the application scales. Ultimately, the component-based approach is more aligned with industry standards for mobile applications.

## Dependencies

### Core Dependencies

- **`@react-navigation/native`**: Provides foundational navigation utilities, allowing smooth screen transitions and easy navigation handling, crucial for multi-screen applications.

- **`@react-navigation/native-stack`**: Adds stack navigation capabilities with native feel and animations, ideal for managing hierarchical navigation in apps.

- **`react-native-safe-area-context`**: Ensures UI elements respect device-specific safe areas (e.g., notches and navigation bars) by adjusting padding, maintaining a consistent look across devices.

- **`react-native-screens`**: Enhances navigation performance by managing screen lifecycles efficiently, which optimizes memory usage and speeds up transitions, particularly in complex navigation stacks.

### Development Dependencies

- **`@jest/globals`**: Provides Jest's global testing functions, essential for organizing test cases and structuring test suites for better readability and maintainability.

- **`@testing-library/react-native`**: Facilitates component testing by simulating user interactions, ensuring components render and function as expected.

- **`jest`**: A comprehensive testing framework for running and structuring test cases, improving code reliability through rigorous test coverage.

- **`jest-expo`**: Optimizes Jest configuration specifically for Expo projects, simplifying setup and ensuring compatibility with Expo’s components and APIs.

- **`react-test-renderer`**: Enables component snapshot testing to track changes in component renders over time, improving code stability by detecting unintended changes.

## Testing Strategy

The app is tested comprehensively using Jest and React Native Testing Library, with both unit and integration tests applied to core components and functions. The testing strategy includes:

- **API Testing**: Validates that API requests are formatted correctly and handles responses as expected.
- **Component Testing**: Ensures UI elements render as expected and respond correctly to user interactions, such as button clicks and text input changes.

This testing approach ensures that the application remains reliable and easy to modify, with a reduced risk of introducing bugs in future updates.

## Getting Started

1. Clone the repository
2. Run `yarn` to install dependencies
3. Run `yarn start` to launch the app in development mode

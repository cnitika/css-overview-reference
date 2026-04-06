# Contributing to CSS Overview Reference

Thank you for your interest in contributing to the CSS Overview Reference project! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## 🤝 Ways to Contribute

There are many ways you can contribute to this project:

- **Report Bugs**: Found an issue? Let us know by opening a GitHub issue
- **Suggest Features**: Have an idea for improvement? Share it with us
- **Improve Documentation**: Help us write better explanations and examples
- **Add Demonstrations**: Create new animated demos for CSS concepts
- **Fix Issues**: Submit pull requests to fix bugs or implement features
- **Improve Code Quality**: Refactor code, add tests, or improve performance
- **Translate Content**: Help translate the website to other languages

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- pnpm (or npm/yarn)
- Git
- GitHub account

### Setup Development Environment

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/css-overview-reference.git
   cd css-overview-reference
   ```

3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/cnitika/css-overview-reference.git
   ```

4. Install dependencies:
   ```bash
   pnpm install
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

The website will be available at `http://localhost:3000`

## 📝 Development Workflow

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-animation-demos` for new features
- `fix/typo-in-reference` for bug fixes
- `docs/improve-flexbox-explanation` for documentation
- `refactor/optimize-component-rendering` for refactoring

### Making Changes

1. Make your changes in the appropriate files
2. Test your changes locally
3. Ensure code follows the project's style guidelines
4. Commit your changes with clear messages:
   ```bash
   git commit -m "Add: New animated demo for CSS transforms"
   ```

### Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add:` for new features or content
- `Fix:` for bug fixes
- `Improve:` for improvements to existing features
- `Refactor:` for code refactoring
- `Docs:` for documentation changes
- `Style:` for formatting or styling changes
- `Test:` for adding or updating tests

Example:
```
Add: Interactive demo for CSS Grid layout
- Create new GridDemo component
- Add grid visualization
- Include copy-to-clipboard code example
```

### Testing Your Changes

Before submitting a pull request:

1. Test the website locally:
   ```bash
   pnpm dev
   ```

2. Check for TypeScript errors:
   ```bash
   pnpm check
   ```

3. Build the project:
   ```bash
   pnpm build
   ```

4. Test the build:
   ```bash
   pnpm preview
   ```

## 📂 Project Structure

Understanding the project structure will help you contribute effectively:

```
client/src/
├── pages/              # Page components
│   ├── Home.tsx       # Landing page
│   ├── sections/      # CSS concept sections
│   │   ├── Modules.tsx
│   │   ├── LayoutDisplay.tsx
│   │   ├── AdvancedStyling.tsx
│   │   ├── TransformsTransitions.tsx
│   │   ├── Tools.tsx
│   │   └── Reference.tsx
│   └── ArchitectureDiagram.tsx
├── components/         # Reusable components
│   ├── TransformDemos.tsx
│   └── ui/            # shadcn/ui components
├── App.tsx            # Main app component
└── index.css          # Global styles
```

## 🎨 Adding New Content

### Adding a New CSS Concept Example

1. Navigate to the appropriate section file (e.g., `Modules.tsx`)
2. Add your concept to the concepts array:
   ```typescript
   {
     id: "your-concept",
     title: "Your Concept Title",
     description: "Brief description of the concept",
     code: `/* Your CSS code example */`,
     explanation: "Detailed explanation"
   }
   ```

3. Test the changes locally
4. Submit a pull request

### Adding an Animated Demo

1. Create a new demo component in `components/TransformDemos.tsx`:
   ```typescript
   export function YourDemoName() {
     const [isAnimating, setIsAnimating] = useState(true);
     
     return (
       <div className="space-y-4">
         {/* Your demo content */}
       </div>
     );
   }
   ```

2. Import and use it in the appropriate section page
3. Test the animation locally
4. Submit a pull request

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: How to reproduce the issue
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, Node version

Example:
```
Title: Animation demo not playing on mobile

Description:
The bounce animation in the Transforms section doesn't play on mobile devices.

Steps to Reproduce:
1. Open the website on a mobile device
2. Navigate to Transforms & Transitions section
3. Scroll to the bounce animation demo

Expected Behavior:
The animation should play smoothly

Actual Behavior:
The animation doesn't play at all

Environment:
- Browser: Chrome Mobile
- OS: iOS 16
- Device: iPhone 12
```

## 💡 Suggesting Features

When suggesting features, please include:

1. **Use Case**: Why is this feature needed?
2. **Proposed Solution**: How should it work?
3. **Alternatives**: Any alternative approaches?
4. **Additional Context**: Any other relevant information

## 📋 Pull Request Process

1. Update your fork with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a Pull Request on GitHub with:
   - Clear title describing the changes
   - Detailed description of what was changed and why
   - Reference to any related issues (e.g., "Fixes #123")
   - Screenshots if applicable

4. Wait for review and address any feedback

5. Once approved, your PR will be merged!

## 📖 Documentation Guidelines

When writing documentation or explanations:

- Use clear, simple language
- Explain the "why" not just the "what"
- Provide practical examples
- Include links to related concepts
- Keep explanations concise but complete

## 🎯 Code Style Guidelines

- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Use Tailwind CSS for styling
- Keep components small and focused
- Add comments for complex logic
- Use meaningful variable names

## 🔍 Code Review

All contributions will be reviewed by maintainers. During review:

- Be open to feedback
- Ask questions if something is unclear
- Make requested changes promptly
- Thank reviewers for their time

## ✅ Checklist Before Submitting

- [ ] Code follows project style guidelines
- [ ] Changes are well-documented
- [ ] No console errors or warnings
- [ ] TypeScript compilation successful
- [ ] Build completes without errors
- [ ] Changes tested locally
- [ ] Commit messages are clear and descriptive
- [ ] Pull request description is detailed

## 🎓 Learning Resources

- [CSS MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📞 Getting Help

If you need help:

1. Check existing issues and pull requests
2. Read the project documentation
3. Open a discussion or issue
4. Ask in comments on related issues

## 🙏 Thank You

Thank you for contributing to CSS Overview Reference! Your efforts help make this a better resource for everyone learning CSS.

---

**Happy Contributing!** 🎉

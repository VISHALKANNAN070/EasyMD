# EasyMD

AI-powered simple README.md generator for GitHub projects.

## Features

- Generates clean, minimal README files
- Uses AI to format project descriptions
- Free tier API usage via OpenRouter

## Tech Stack

- Frontend: React.js
- Backend: Express.js, Node.js
- AI Service: OpenRouter (deepseek model)

## File Structure

```
.
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── InputText.jsx
│   │   │   ├── OutputPreview.jsx
│   │   │   └── Toolbar.jsx
│   │   └── utils
│   │       ├── api.js
│   │       └── hooks.js
└── server
    ├── controllers
    │   └── generateReadme.js
    ├── middleware
    │   └── validateInput.js
    ├── routes
    │   └── formatRoutes.js
    └── utils
        └── cleanReadme.js
```


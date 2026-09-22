# Memories of us— GitHub-ready version

This is the website for the one-QR-code memory calendar.

## How it works

- `index.html` is the website.
- `memories.js` is the ONLY file you normally need to edit.
- `photos/` is where you can put your pictures.
- The website checks the visitor's current date.
- Memories become visible on their `unlockDate`.
- Once unlocked, they stay visible.
- Future memories remain hidden.
- The QR code can stay the same forever as long as this site keeps the same URL.

## Adding or editing a memory

Open `memories.js`.

Each memory looks like this:

```js
{
  unlockDate: "2027-11-19",
  title: "A special day",
  message: "Write your memory here.",
  photo: "photos/special-day.jpg",
  photoAlt: "Us together",
  photoCaption: "A little caption"
}
```

### Dates

Use `YYYY-MM-DD`.

The `unlockDate` is the anniversary date when the memory should unlock.

For example:

Original memory: 21 September 2025
Unlock date: 21 September 2026
`unlockDate: "2026-09-21"`

### Photos

1. Put the photo inside the `photos` folder.
2. In `memories.js`, set the path:
   `photo: "photos/my-photo.jpg"`
3. Commit/save both files to GitHub.

The image can be JPG, PNG, or WebP.

## Adding a brand-new memory

Copy one of the existing blocks, paste it before the final `];`, and change the details.

The website automatically sorts memories by unlock date.

## GitHub Pages setup

1. Create a free GitHub account at https://github.com/
2. Create a new repository.
3. Upload `index.html`, `memories.js`, and the `photos` folder.
4. In the repository, open **Settings → Pages**.
5. Under the publishing/source section, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save.
8. GitHub will give you a website address ending in `.github.io`.

Use that website address for the ONE QR code.

## Updating later

When you want to add a memory:

1. Open the GitHub repository.
2. Open `memories.js`.
3. Click the edit/pencil button.
4. Change or add your memory.
5. Commit the changes.
6. If adding a photo, upload it into `photos/`.

GitHub Pages will update the website automatically.

## Important

The website is public. Anyone who has the URL can view the unlocked memories.

Do not put passwords, private account information, or other sensitive information in the site.

## Optional next step

A future version can have a more visual "memory editor" where you edit all memories in a form instead of editing JavaScript. The current version deliberately keeps the GitHub setup simple and reliable.

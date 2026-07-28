# Reusable Survey Website Template

A minimal, responsive feedback form for courses, workshops, seminars, events, projects, or internal evaluations.

## Live demo

The template is published through the existing GitHub Pages repository at:

`https://eybmits.github.io/survey-template/`

## Reuse it

For a new survey, usually only edit `config.js`:

- `title`: survey title
- `intro`: short introduction
- `duration`: estimated completion time
- `recipientEmail`: email address that receives submissions
- `emailSubject`: subject line of the notification email
- `scaleLeft` and `scaleRight`: labels for the five-point scale
- `questions`: scale or free-text questions

Supported question types:

```js
{ type: "scale", text: "Your statement", required: true }
{ type: "text", text: "Your open question", required: false, placeholder: "Optional feedback" }
```

## Deployment for another survey

1. Copy the whole `survey-template` folder.
2. Rename the copied folder, for example to `workshop-feedback-2027`.
3. Edit the copied `config.js`.
4. Commit and push.
5. Open `https://<username>.github.io/<folder-name>/`.

## Submission handling

The static website itself does not store responses. The form sends submissions through FormSubmit to the email configured in `recipientEmail`. The recipient may need to confirm the FormSubmit activation email once.

Do not place GitHub tokens or other secrets in the browser code.

## Files

- `index.html`: reusable survey renderer and styling
- `config.js`: all survey-specific wording and questions
- `danke.html`: confirmation page

## Notes

GitHub Pages hosts only static files. Storing responses directly in a public Git repository is not recommended because answers would become public and remain in the Git history.

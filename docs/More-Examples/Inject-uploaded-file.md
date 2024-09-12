---
sidebar_position: 15
---

# Inject uploaded file

To inject uploaded file, use @UploadedFile decorator:

```
@Post("/files")
saveFile(@UploadedFile("fileName") file: any) {
}
```

You can also specify uploading options to multer this way:

```
// to keep code clean better to extract this function into separate file
export const fileUploadOptions = () => ({
    storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => { ...
        },
        filename: (req: any, file: any, cb: any) => { ...
        }
    }),
    fileFilter: (req: any, file: any, cb: any) => { ...
    },
    limits: {
        fieldNameSize: 255,
        fileSize: 1024 * 1024 * 2
    }
});

// use options this way:
@Post("/files")
saveFile(@UploadedFile("fileName", { options: fileUploadOptions }) file: any) {
}
```

To inject all uploaded files use @UploadedFiles decorator instead. Routing-controllers uses multer to handle file uploads. You can install multer's file definitions via typings, and use files:File[] type instead of any[].

# Orwell v0.3

Google changed a thing, and I lost the initial Dockerfile for this project...

~So it's back! And it's been cleaned up a bit!~

OK, scratch that, it's being rebuilt in Python3 because I can't be bothered with the maintenance to keep it Python2.

```bash
docker run -it --rm -d -p 8081:80 bullsec/orwell:latest
```

Then head to `http://127.0.0.1:8081` to use the application

## TODO

- [ ] Fix the /download/ function because it's borked (files are being created, something in the `send_file()` function in Flask going skewif

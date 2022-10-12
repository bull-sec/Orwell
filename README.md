# Orwell v0.4

Google changed a thing, and I lost the initial Dockerfile for this project...

~So it's back! And it's been cleaned up a bit!~

~OK, scratch that, it's being rebuilt in Python3 because I can't be bothered with the maintenance to keep it Python2.~

IT IS NOW PYTHON3 COMPATIBLE!

```bash
# Build it
docker build -t bulldops/orwell:latest .
```

```bash
# Run it
docker run -it --rm -d -p 8081:80 bullsec/orwell:latest
```

Then head to `http://127.0.0.1:8081` to use the application.

## TODO

- [x] Fix the /download/ function because it's borked (files are being created, something in the `send_file()` function in Flask going skewif (update, they renamed the `attachment_filename` method to `download_file`, changed that one thing and it's working fine)

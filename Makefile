.PHONY: all
all:
	@casperjs index.js

.PHONY: clean
clean:
	@rm -rf ./screens/*

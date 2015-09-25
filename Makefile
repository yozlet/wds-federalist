VERSION = 0.8

releases:

	@# Create releases directory
	@rm -rf $@ && mkdir $@

	@# Copy current "assets" folder
	@cp -rf assets $@

	@# Remove prepackaged releases directory
	@rm -rf $@/assets/releases

	@# Remove styleguide.scss
	@rm -r $@/assets/css/styleguide.scss

	@# Add compiled CSS
	@cp _site/assets/css/main.css $@/assets/css/

	@# Zip assets (ignoring all hidden files)
	zip -q -r wds-v$(VERSION).zip $@/assets -x "*.*"

	@# Move folder into assets/releases
	@mkdir -p assets/$@
	mv wds-v$(VERSION).zip assets/$@/

	@# Clean up
	@rm -rf $@

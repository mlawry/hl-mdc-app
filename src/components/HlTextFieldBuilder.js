import { MDCTextField } from '@material/textfield';

// Webpack has been configured to use style-loader to inject this SCSS into the
// DOM's <head><style> tag.
import './HlTextFieldBuilder.scss';

/**
 * The code in this class is written based on the documentation for MDCTextField found
 * here https://material.io/components/text-fields/web.
 */
class HlTextFieldBuilder {
    /**
     * Creates DOM elements for a filled MDCTextField, including an input accompanied by a label.
     * Call the start() method with the return value to initialise the JavaScript behaviour.
     * @param {string} mdcTextFieldId The [input] DOM element's HTML ID.
     * @param {string} mdcTextFieldType E.g. 'text' or 'password'.
     * @param {string} mdcTextFieldName The form input's 'name' attribute value.
     * @param {string} mdcTextFieldLabel The accompanying label's text value.
     * @returns The [div] DOM element that wraps the text field and label.
     */
    createFilled(mdcTextFieldId, mdcTextFieldType, mdcTextFieldName, mdcTextFieldLabel) {
        let divWrapper = jQuery(document.createElement("label"))
            .addClass("mdc-text-field")
            .addClass("mdc-text-field--filled")
            .append(
                jQuery(document.createElement("span"))
                    .addClass("mdc-text-field__ripple"),
                jQuery(document.createElement("span"))
                    .addClass("mdc-floating-label")
                    .attr("id", mdcTextFieldId)
                    .text(mdcTextFieldLabel),
                jQuery(document.createElement("input"))
                    .addClass("mdc-text-field__input")
                    .attr("type", mdcTextFieldType)
                    .attr("name", mdcTextFieldName)
                    .attr("aria-labelledby", mdcTextFieldId),
                jQuery(document.createElement("span"))
                    .addClass("mdc-line-ripple")
            );
        return divWrapper;
    }

    /**
     * Initialise behaviour on the given divWrapper using the MDCTextField class.
     * @param {HTMLElement} divWrapper The [div] DOM element that wraps the text field
     * and label, as returned by the createFilled() method.
     * @returns The MDCTextField object instance.
     */
    start(divWrapper) {
        // Because divWrapper is actually a jQuery wrapper, use [0] to get at the DOM element.
        return new MDCTextField(divWrapper[0]);
    }
}

export default HlTextFieldBuilder;

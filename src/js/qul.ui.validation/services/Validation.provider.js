(function () {
    'use strict';

    angular.module('qul.ui.validation')
        .provider('Validation', function () {
            /**
             *
             * @type {Object}
             */
            var defaultMessages = {
                // This is generic message if no constraint was found
                generic: 'Invalid field',
                // Constraint: 'Short message'
                required: 'This is required',
                pattern: 'Doesn\'t fit pattern',
                number: 'Must be a number',
                max: 'Value is to high',
                min: 'Value is to low',
                minlength: 'Value is to short',
                maxlength: 'Value is to long',
                email: 'Value must be an email'
            };

            /**
             *
             * @param {Object} data
             */
            this.setMessages = function (data) {
                for (var property in data) {
                    defaultMessages[property] = data[property];
                }
            };

            this.$get = function () {
                return {
                    /**
                     * Get type of first validation error
                     *
                     * @param {Object} formField
                     * @returns {null|String}
                     */
                    getFirstErrorType: function (formField) {
                        var errors = formField.$error;
                        var errorsTypes = Object.keys(errors);

                        // Sort array for prevention random position
                        errorsTypes.sort();

                        return (errorsTypes.length === 0) ? null : errorsTypes[0];
                    },

                    /**
                     * Get validation message based on validation error type
                     *
                     * @param {String} errorType
                     * @param {Array} [messages]
                     * @returns {String}
                     */
                    getValidationMessage: function (errorType, messages) {
                        var isSetMessages = true;
                        var message;

                        if(undefined === messages){
                            // Use only default messages
                            isSetMessages   = false;
                            messages        = defaultMessages;
                        }

                        message = messages[errorType];

                        if(true === isSetMessages && !message){
                            // If set extra messages but this error type is not exists in extra massages try use
                            // default messages.
                            message = defaultMessages[errorType];
                        }

                        return message ? message : defaultMessages.generic;
                    },

                    /**
                     * Get validation message of first type validation error
                     *
                     * @param {Object} formField
                     * @param {Array} [messages]
                     * @returns {null|String}
                     */
                    getFirstErrorValidationMessage: function(formField, messages){
                        var errorType = this.getFirstErrorType(formField);

                        if(null === errorType){
                            return null;
                        }

                        return this.getValidationMessage(errorType, messages);
                    }
                }
            }
        });
}());

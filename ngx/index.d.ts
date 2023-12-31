import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Social Sharing
 * @premier social-sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 *
 * For Browser usage check out the Web Share API docs: https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api
 * @usage
 * ```typescript
 * import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
 *
 * constructor(private socialSharing: SocialSharing) { }
 *
 * ...
 *
 * // Check if sharing via email is supported
 * this.socialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
export declare class SocialSharingOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Shares using the share sheet
     *
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     * @returns {Promise<any>}
     */
    share(message?: string, subject?: string, file?: string | string[], url?: string): Promise<any>;
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     *
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @param options.message
     * @param options.subject
     * @param options.files
     * @param options.url
     * @param options.chooserTitle
     * @returns {Promise<any>}
     */
    shareWithOptions(options: {
        message?: string;
        subject?: string;
        files?: string[];
        url?: string;
        chooserTitle?: string;
    }): Promise<any>;
    /**
     * Checks if you can share via a specific app.
     *
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    canShareVia(appName: string, message?: string, subject?: string, image?: string, url?: string): Promise<any>;
    /**
     * Shares directly to Twitter
     *
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    shareViaTwitter(message: string, image?: string, url?: string): Promise<any>;
    /**
     * Shares directly to Facebook
     *
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    shareViaFacebook(message: string, image?: string, url?: string): Promise<any>;
    /**
     * Shares directly to Facebook with a paste message hint
     *
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    shareViaFacebookWithPasteMessageHint(message: string, image?: string, url?: string, pasteMessageHint?: string): Promise<any>;
    /**
     * Shares directly to Instagram
     *
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    shareViaInstagram(message: string, image: string): Promise<any>;
    /**
     * Shares directly to WhatsApp
     *
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    shareViaWhatsApp(message: string, image?: string, url?: string): Promise<any>;
    /**
     * Shares directly to a WhatsApp Contact
     *
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    shareViaWhatsAppToReceiver(receiver: string, message: string, image?: string, url?: string): Promise<any>;
    /**
     * Share via SMS
     *
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    shareViaSMS(options: {
        message?: string;
        subject?: string;
        files?: string[];
        image?: any;
        url?: string;
        chooserTitle?: string;
    }, phoneNumber: string): Promise<any>;
    /**
     * Checks if you can share via email
     *
     * @returns {Promise<any>}
     */
    canShareViaEmail(): Promise<any>;
    /**
     * Share via Email
     *
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    shareViaEmail(message: string, subject: string, to: string[], cc?: string[], bcc?: string[], files?: string | string[]): Promise<any>;
    /**
     * Share via AppName
     *
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    shareVia(appName: string, message: string, subject?: string, image?: string, url?: string): Promise<any>;
    /**
     * defines the popup position before call the share method.
     *
     * @param targetBounds {string} left, top, width, height
     */
    setIPadPopupCoordinates(targetBounds: string): void;
    /**
     * Save an array of images to the camera roll
     *
     * @param  {string|string[]} fileOrFileArray Single or multiple files
     * @returns {Promise<any> }
     */
    saveToPhotoAlbum(fileOrFileArray: string | string[]): Promise<any>;
    /**
     * Shares directly to a WhatsApp Contact with phone number.
     *
     * @param phone {string} Pass phone number
     * @param message {string} Message to send
     * @param fileOrFileArray fileOrFileArray Single or multiple files
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    shareViaWhatsAppToPhone(phone: string, message: string, fileOrFileArray: string | string[], url?: string): Promise<any>;
}

export declare const SocialSharing: SocialSharingOriginal;
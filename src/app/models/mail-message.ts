export class MailMessage {
  public to: string = null;
  public from: string = null;
  public subject: string = null;
  public message: string = null;
  constructor(mailMessage?) {
    if (mailMessage) {
      this.to = mailMessage.to;
      this.from = mailMessage.from;
      this.subject = mailMessage.subject;
      this.message = mailMessage.message;
    }
  }
}

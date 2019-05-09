export interface Messsage{
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
  priority: string,
  date: Date;
}
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var editedRow = e.range.getRow();
  var editedCol = e.range.getColumn();
  
  var value = sheet.getRange(editedRow, 1, 1, sheet.getLastColumn()).getValues()[0];
  var myVar = value[editedCol - 1];

  var email = value[4]; // assuming email is in column E (column 5)
  var requestor = value[0]; // assuming requestor is in column A (column 1)
  var status = value[9];
  var link = value[8]; 
  var message = value[14]; 
  var email2 = "gea.tech.company7@gmail.com";

  // Create the email template with HTML content
  var subject = "Turnitin Scanning";
  var body = "<h3>Hi " + requestor + ",</h3><p>Your scanning request is noted. It is now processing.</p><p>If you're not a respondent of our survey, please send a payment first. Thank you!  <li> Status:" + status + "</li> <li> Turnitin Result Link:" + link + "</li> <li> Message:" + message + "</li> <li> Gsheet Link: https://docs.google.com/spreadsheets/d/15yac-SZvdyTjTVTUVZQzDZTqHuXtUbsSkj9lWJD3l4k/edit?usp=sharing </li> Regards, <br> Gabriel Edrian Alvaro";

  // Send the email with HTML content if status is "DONE" or "PROCESSING"
if (status === "DONE" || status === "PROCESSING") {
  GmailApp.sendEmail(email, subject, "", {htmlBody: body});
  GmailApp.sendEmail(email2, subject, "", {htmlBody: body});
}
  Logger.log(body);
}

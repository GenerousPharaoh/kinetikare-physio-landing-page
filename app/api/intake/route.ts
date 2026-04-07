import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      contactPreference,
      bodyAreas,
      painLevel,
      description,
      duration,
      dailyImpact,
      previousTreatment,
      previousTreatmentDetails,
      imaging,
      goal,
      additionalInfo,
      patientType,
      preferredDays,
      insurance,
      insuranceProvider,
      referralSource,
    } = body;

    const bodyAreasText = bodyAreas?.length > 0 ? bodyAreas.join(', ') : 'Not specified';
    const dailyImpactText = dailyImpact?.length > 0 ? dailyImpact.join(', ') : 'Not specified';
    const imagingText = imaging?.length > 0 ? imaging.join(', ') : 'None';
    const preferredDaysText = preferredDays?.length > 0 ? preferredDays.join(', ') : 'Flexible';

    const painLabels: Record<number, string> = {
      1: 'Minimal',
      2: 'Mild',
      3: 'Moderate',
      4: 'Severe',
      5: 'Very Severe',
    };

    const htmlContent = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1A202C;">
        <div style="background: linear-gradient(135deg, #B08D57, #D4AF37); padding: 24px 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 500;">New Patient Intake</h1>
          <p style="color: rgba(255,255,255,0.85); font-size: 14px; margin: 4px 0 0 0;">${patientType === 'returning' ? 'Returning' : 'New'} patient submission</p>
        </div>

        <div style="background: #ffffff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
          <h2 style="font-size: 16px; color: #B08D57; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 0;">Contact Information</h2>
          <table style="width: 100%; font-size: 14px; line-height: 1.6;">
            <tr><td style="color: #6b7280; width: 140px; padding: 4px 0;">Name</td><td style="font-weight: 500;">${name}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Email</td><td>${email}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Phone</td><td>${phone}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Prefers</td><td>${contactPreference}</td></tr>
          </table>

          <h2 style="font-size: 16px; color: #B08D57; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Concern</h2>
          <table style="width: 100%; font-size: 14px; line-height: 1.6;">
            <tr><td style="color: #6b7280; width: 140px; padding: 4px 0;">Area(s)</td><td style="font-weight: 500;">${bodyAreasText}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Pain Level</td><td>${painLabels[painLevel] || painLevel}/5</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Duration</td><td>${duration}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Daily Impact</td><td>${dailyImpactText}</td></tr>
          </table>
          ${description ? `<p style="font-size: 14px; background: #f9fafb; padding: 12px 16px; border-radius: 8px; margin-top: 12px; color: #374151;">"${description}"</p>` : ''}

          <h2 style="font-size: 16px; color: #B08D57; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">History & Goals</h2>
          <table style="width: 100%; font-size: 14px; line-height: 1.6;">
            <tr><td style="color: #6b7280; width: 140px; padding: 4px 0;">Previous Tx</td><td>${previousTreatment === 'yes' ? `Yes - ${previousTreatmentDetails || 'details not provided'}` : 'No'}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Imaging</td><td>${imagingText}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Goal</td><td style="font-weight: 500;">${goal}</td></tr>
          </table>
          ${additionalInfo ? `<p style="font-size: 14px; background: #f9fafb; padding: 12px 16px; border-radius: 8px; margin-top: 12px; color: #374151;">"${additionalInfo}"</p>` : ''}

          <h2 style="font-size: 16px; color: #B08D57; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px; margin-top: 24px;">Scheduling</h2>
          <table style="width: 100%; font-size: 14px; line-height: 1.6;">
            <tr><td style="color: #6b7280; width: 140px; padding: 4px 0;">Patient Type</td><td>${patientType === 'returning' ? 'Returning' : 'New'}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Preferred Days</td><td>${preferredDaysText}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Insurance</td><td>${insurance === 'yes' ? `Yes - ${insuranceProvider || 'provider not specified'}` : insurance === 'no' ? 'No' : 'Not sure'}</td></tr>
            <tr><td style="color: #6b7280; padding: 4px 0;">Referral</td><td>${referralSource || 'Not specified'}</td></tr>
          </table>
        </div>

        <div style="background: #f9fafb; padding: 16px 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
          <p style="font-size: 12px; color: #9ca3af; margin: 0;">Submitted from kinetikarephysio.com intake form</p>
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: 'KinetiKare Intake <onboarding@resend.dev>',
      to: ['kareem.hassanein@gmail.com'],
      subject: `New Intake: ${name} - ${bodyAreasText}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Intake API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

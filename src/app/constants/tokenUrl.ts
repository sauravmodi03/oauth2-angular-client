const token = (code:string) => {
    const codeVerifier = 'L7NY5MmkvbV6Gsu4XRJmxFLnqNH8ArMij5KGcXym5nmLBwN5qR5p1F9-jVfFz3C7LD8X_JjNW_MFcyz4ws_ccXfeqT74-XbaxR-1xMYkhS3KxXQZwEShwQC1XuDKwoCM';
    return `http://localhost:9000/oauth2/token?grant_type=authorization_code&client_id=client&code=${code}&redirect_uri=http://localhost:3000/authorize&code_verifier=${codeVerifier}`;
}

export default token;
const redirectUrl =  () => {
    const codeChallenge = 'kszgGpGMFPMh32wQUC6Nbmer1SO1onXxo8XJEITd838';
    
    return `http://localhost:9000/oauth2/authorize?client_id=client&response_type=code&scope=openid&redirect_uri=http://localhost:3000/authorize&code_challenge=${codeChallenge}&code_challenge_method=S256`;
};

export default redirectUrl;


test('Does Start Game and Quit work?', async () => {
    const gameState = {
        score: 0,
        currentQuestion: 0,
    };
    
    const startGame = jest.fn();
    const quitGame = jest.fn();
    
    await startGame(gameState);
    expect(startGame).toHaveBeenCalledWith(gameState);
    
    await quitGame();
    expect(quitGame).toHaveBeenCalled();
})


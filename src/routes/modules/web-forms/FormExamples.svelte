<form class="form-examples">
    <div class="form-item">
        <input type="text" name="text-input" placeholder="Type text in here" id="text-input" size="16"/>
    <label for="text-input">Text Input</label>
    </div>
    
    <div class="form-item">
        <input type="checkbox" name="checkbox-input" id="checkbox-input"/>
        <label for="checkbox-input">Checkbox Input</label>
    </div>

    <div class="form-item">
        <input type="number" name="number-input" id="number-input"/>
        <label for="number-input">Number Input</label>
    </div>
    <div class="form-item">
        <input type="date" name="date-input" id="date-input"/>
        <label for="date-input">Date Input</label>
    </div>
    <div class="form-item">
        <input type="email" name="email-input" id="email-input" placeholder="Type your email here"/>
        <label for="email-input">Email Input</label>
    </div>
    <div class="form-item">
        <input type="password" name="password-input" id="password-input" placeholder="Type your password here"/>
        <label for="password-input">Password Input</label>
    </div>
    <div class="form-item">
        <input type="range" name="range-input" id="range-input" min="0" max="100"/>
        <label for="range-input">Range Input</label>
    </div>
    <div class="form-item">
        <input type="file" name="file-input" id="file-input"/>
        <label for="file-input">File Input</label>
    </div>
    
    <div class="form-item">
        <input type="radio" name="radio-input" id="radio-input"/>
        <label for="radio-input">Radio Input</label>
    </div>

</form>

<style>
    form.form-examples {
        display: flex;
        flex-flow: row wrap;
        gap: 12px;
        margin-top: 16px;
        justify-content: space-evenly;
    }
    .form-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: space-around;
        align-items: center;
        padding: 16px;
        max-width: 30%;
        border: 1px solid grey;
        border-radius: 8px;
    }
</style>
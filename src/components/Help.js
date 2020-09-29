import React from 'react';

export default function Help() {
    return (
        <div style = {{padding: "2%"}}>
            <div className = "helpText" style = {{fontSize: "1.5em"}}>
                <h1>Help</h1>
                <p>In this app you can create and manage your own to-do list</p>
                <ul>You can:
                    <li>add a new tasks</li>
                    <li>mark the task as done</li>
                    <li>move the task back to to-do section</li>
                    <li>delete the task</li>
                </ul>
                <h2>If you need have questions or feedback please feel free to contact </h2>
                <h3>
                    <a href="mailto: abc@example.com">
                        <span style = {{color: "rgba(159, 197, 255, 0.877)"}}>myemail@google.com</span>
                    </a>
                </h3>
            </div>
        </div>
    )
}

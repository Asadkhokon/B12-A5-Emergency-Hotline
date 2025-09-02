console.log("For Checking Js connection.");

        let heartCount = 100;
        let coinCount = 100;
        let copyCount = 0;
        let callHistory = [];


        function getformattedTime() {
            const now = new Date();

            const hours=String(now.getHours()).padStart(2,'0');
            const minutes=String(now.getMinutes()).padStart(2,'0');
            const seconds=String(now.getSeconds()).padStart(2,'0');

            return `${hours}:${minutes}:${seconds}`;
        }

        function incrementHeart() {
            heartCount++;
            document.getElementById('heart-count').textContent = heartCount;}

        
        function copyNumber(number, service) {
       
            navigator.clipboard.writeText(number).then(() => {
                alert(`Copied ${service} number: ${number}`);
            });
            
            copyCount++;
            document.getElementById('copy-count').textContent = copyCount;
        }

        function makeCall(number, service) {
            if (coinCount < 20) {
                alert("You don't have enough coins to make a call. Minimum 20 coins required.");
                return;
            }
            
            coinCount -= 20;
            document.getElementById('coin-count').textContent = coinCount;
            

            const callTime=getformattedTime();


            alert(`Calling ${service} at ${number} (${callTime})`);
            
            addToHistory(service, number, callTime);
        }

        function addToHistory(service, number, callTime) {
            if (callHistory.length === 0) {
                document.getElementById('empty-history').style.display = 'none';
            }
            
            callHistory.push({ service, number, callTime });
            
            const historyItem = document.createElement('div');
            historyItem.className = 'bg-gray-100 p-3 rounded-lg';
            historyItem.innerHTML = `
            <div class="flex justify-between items-start">
                <div>
                <p class="font-semibold">${service}</p>
                <p class="text-gray-600">${number}</p>
                </div>
                <span class="text-gray-500 text-sm">${callTime}</span>
            </div>
            `;
            
            document.getElementById('history-list').prepend(historyItem);
        }

        function clearHistory() {
            callHistory = [];
            document.getElementById('history-list').innerHTML = '';
            
            const emptyMsg = document.createElement('p');
            emptyMsg.className = 'text-gray-500 text-center py-10';
            emptyMsg.id = 'empty-history';
            emptyMsg.textContent = 'No call history yet';
            document.getElementById('history-list').appendChild(emptyMsg);
        }
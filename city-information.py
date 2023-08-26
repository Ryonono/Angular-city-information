from flask import Flask, jsonify, request, redirect, url_for
from flask_cors import CORS
import time


app = Flask(__name__)
CORS(app)


@app.route('/', methods=['POST'])
def get_data():
    data = request.get_json()
    country = (data["country"] + " was sent to Flask")
    city = (data["city"] + " was sent to Flask")
    # 今まではcountry, cityの値を更新した後その値をdataに戻していなかったので、新たな変数resultに更新後の値を格納
    result = {"country": country, "city": city}

    # 状態を見てみると、country, cityの値はFlask側に渡されていた
    print(result)

    # sleep関数を使用して、一時的に５秒間待たせる（バックエンド側で処理に時間がかかっていることを示している）
    time.sleep(5)
    print("waited for 5 seconds")

    return jsonify(result)
    # return redirect(url_for("/result", {
    #     "country": country,
    #     "city": city
    # }))


if __name__ == '__main__':
    app.run(debug=True)

---
title: Mockeyを触った時のメモ
pubDate: 2022-02-01
---

業務で開発している Laravel 製のアプリケーションのテストで Mockey を使った時のちょっとしたメモ

## Guzzle のモック化

API 通信を行うクラスで Guzzle を使用しており、レスポンスのステータスコードによって処理を分岐させていた。

この Guzzle をモックして簡単なテストを書いた。超ざっくりこんな感じ。

```php
$this->guzzle
    ->shouldReceive('request')
    ->once()
    ->with('POST', 'エンドポイント', Mockery::on(
        function ($actual) use ($expected) {
            $this->assertSame($expected, $actual);
            return true;
        }
    ))
    ->andReturn($this->psrResponse);

// 送信成功
$this->psrResponse
    ->shouldReceive('getStatusCode')
    ->once()
    ->andReturn(200);

// 失敗
$this->psrResponse
    ->shouldReceive('getStatusCode')
    ->once()
    ->andReturn(500);
```

Mockey の`with()`にはオブジェクトを直接渡せないので`Mockey::on()`の中でクロージャ形式で引数を検証するようにするとうまくいった。
参考：[Mockery with() でメソッドが Object を渡す検証で NoMatchingExpectationException](https://qiita.com/ttn_tt/items/a35638ab12d4dc2ea488)

またログの書き込み処理を検証する際などにも応用できた。

単純にログメッセージを`with()`に直接渡すと、typo した時などに失敗時のメッセージから差分が確認しずらい。

```
Mockery\Exception\NoMatchingExpectationException: No matching handler found for Mockery_3_Illuminate_Log_LogManager::info('[エラーコード]APIの呼び出しに失敗しました'). Either the method was unexpected or its arguments matched no expected argument list for this method
```

そんな時も`Mockey::on()`で引数を検証するようにすれば差分が見やすくなる。

```php
$expectedMessage = '[エラーコード]APIの呼び出しに失敗しました';
Log::shouldReceive('info')
    ->with(Mockery::on(
        function ($actual) use ($expected) {
            $this->assertSame($expected, $actual);
            return true;
        }
    ));
```

失敗時のメッセージはこんな感じで表示される。

```
Failed asserting that two strings are identical.
--- Expected
+++ Actual
@@ @@
-'[エラーコード]APIの呼び出しに失敗しました。'
+'[エラーコード]APIの呼び出しに失敗しました'
```

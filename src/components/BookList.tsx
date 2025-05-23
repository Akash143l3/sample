import Link from "next/link";
import { Book } from "../../types";
import Image from "next/image";

interface BookListProps {
  books: Book[];
}

export default function BookList({ books }: BookListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <Link href={`/books/${book._id}`} key={book._id}>
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              {book.coverImage ? (
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  className="h-full w-full object-cover"
                  width={500}
                  height={300}
                />
              ) : (
                <div className="text-gray-400">No cover image</div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-gray-600 mt-1">{book.author}</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500 text-sm">★★★★☆</span>
                <span className="text-gray-600 text-sm">(4.0)</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
